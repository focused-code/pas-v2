import { memo, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from './loader';
import { Button, Buttons, Container, Solution, Response, ResponseMarkdown } from './content-styles';
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';

const SearchAi = ({ user, searchAi }) => {

    const [answer, setAnswer] = useState(null);
    const [keyword, setKeyword] = useState('');

    const { isLoading, isError, data, error, refetch } = useQuery(['ai-search', keyword, user?.id], () => searchAi(keyword, user?.id), {
        refetchOnWindowFocus: false,
        enabled: false // disable this query from automatically running
    });

    const onChange = ({ target }) => {
        setKeyword(target.value);
    }

    const handleClick = () => {
        refetch();  // manually refetch
    };

    useEffect(() => {
        if (data?.data?.data) {
            setAnswer(data?.data?.data);
        }
    }, [data]);

    return (
        <Container>
            <Solution>
                <section className="form-box">
                    {(isLoading) ? <Loading /> : (
                        <>
                            <textarea value={keyword} onChange={onChange} disabled={isLoading} placeholder="Enter a something to search" name="keyword" rows="5"></textarea>
                            <Buttons>
                                <Button disabled={isLoading} onClick={handleClick} className="btn-submit">
                                    {isLoading ? <i className="fa fa-spinner fa-spin" /> : <i className="fa fa-search" />}
                                    {isLoading ? <span>Searching...</span> : <span>Search AI</span>}</Button>
                            </Buttons>
                        </>
                    )}
                </section>
                {(answer && !isLoading && !isError) ? (
                    <>
                        <hr />
                        <label>Response:</label>
                        <section className="response-box">
                            <ResponseMarkdown children={answer} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}/>
                        </section>
                    </>
                ) : error ? (
                    <>
                        <hr />
                        <label className='error'>Error:</label>
                        <section className="error-box">
                            <Response>
                                    {error && error.message}
                                </Response>
                            </section>
                    </>
                ) : null}
            </Solution>
        </Container>
    )
}

export default memo(SearchAi);
