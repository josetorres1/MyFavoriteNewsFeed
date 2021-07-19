import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PageControl from "../../components/pageControl/PageControl"
import PostItem from "../../components/postItem/PostItem"
import { AllPostsByPage, fetchComments, fetchPosts } from "../../redux/slices"

const Home = () => {
    let content
    const dispatch = useDispatch()
    const posts = useSelector(AllPostsByPage)
    const postsStatus = useSelector((state) => state.posts.status)
    const commentsStatus = useSelector((state) => state.comments.status)

    useEffect(() => {
        if (postsStatus === "idle") {
            dispatch(fetchPosts())
        }
        if (commentsStatus === "idle") {
            dispatch(fetchComments())
        }
    }, [postsStatus, commentsStatus, dispatch])

    if (postsStatus === "loading") {
        content = <div>Loading latest news...</div>
    } else if (postsStatus === "fulfilled") {
        content = (
            <ul>
                {posts.map((e, i) => (
                    <PostItem title={e.title} body={e.body} key={e.id} postId={e.id} />
                ))}
            </ul>
        )
    }

    return (
        <section>
            <h2>New posts</h2>
            <PageControl />
            <div className="postList">{content}</div>
            <PageControl />
        </section>
    )
}

export default Home
