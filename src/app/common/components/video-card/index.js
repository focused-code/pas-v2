import { memo } from "react"
import { AudioLink, Inner, PDFLink, PlayButton, Title, Video } from "./styles"

const VideoCard = (props) => {

    const { title, audioLink, pdfLink } = props
    return (
        <div className="col-lg-3 col-md-6">
            <div class="p-2">
                <Inner className="p-2 mb-3">
                    <Title>{(title ? title : `Video Title`)}</Title>
                    <Video>
                        <source src="" type="video/mp4" />
                    </Video>
                    <PlayButton><i class="fa fa-play" aria-hidden="true"></i></PlayButton>
                </Inner>
                <AudioLink href={audioLink}>Listen to the Audio</AudioLink>
                <PDFLink href={pdfLink}>Download the PDF</PDFLink>
            </div>
        </div>
    )
}

export default memo(VideoCard)