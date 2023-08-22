import { reduce } from 'lodash';

export const getVideoAnalysis = (e, list) => {

    if (!e || (list.length === 0)) {
        return null;
    } else {
        if (e.type === 'watch-single-video') {
            const found = list.find(a => (a.id.trim() === e.resource.id.trim()) && (a.type_id.trim() === e.resource.type.trim()));
            if (found) {
                return (found.video_progress !== 'None') ? Number(found.video_progress) : 0;
            } else {
                return 0;
            }
        } else if (e.type === 'watch-multiple-video') {
            // Find the percentage of the total videos time watched
            const found = [];

            e.resources.forEach(b => {
                const temp = list.filter(c => (c.id.trim() === b.id.trim()) && (c.type_id.trim() === b.type.trim()));
                if (temp.length) {
                    const p = (temp[0].video_progress !== 'None') ? temp[0].video_progress : 0;
                    found.push(p);
                } else if (temp.length > 1) {
                    const max = Math.max(...temp.map(o => (o.video_progress !== 'None') ? Number(o.video_progress) : 0));
                    found.push(max);
                }
            });

            if (found.length > 0) {
                const sum = reduce(found, (result, value) => ((value !== 'None') ? result + parseFloat(value) : result), 0);
                const average = (sum / ((e.resources.length * 100))) * 100;
                const rounded = Math.round(average * 10) / 10; // Round to 1 decimal place
                return rounded;
            } else {
                return 0;
            }
        } else if (e.type === 'watch-multiple-video-accordion') {
            // Find the percentage of the total videos time watched
            const found = [];

            let videos = [];

            e.resources.forEach(a => { videos = [...videos, ...a.videos] });

            videos.forEach(b => {
                const temp = list.filter(c => (c.id.trim() === b.id.trim()) && (c.type_id.trim() === b.type.trim()));
                if (temp.length) {
                    const p = (temp[0].video_progress !== 'None') ? temp[0].video_progress : 0;
                    found.push(p);
                } else if (temp.length > 1) {
                    const max = Math.max(...temp.map(o => (o.video_progress !== 'None') ? Number(o.video_progress) : 0));
                    found.push(max);
                }
            });

            if (found.length > 0) {
                const sum = reduce(found, (result, value) => ((value !== 'None') ? result + parseFloat(value) : result), 0);
                const average = (sum / ((videos.length * 100))) * 100;
                const rounded = Math.round(average * 10) / 10; // Round to 1 decimal place
                return rounded;
            } else {
                return 0;
            }
        } else {
            return null;
        }
    }
}