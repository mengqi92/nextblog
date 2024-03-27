import Container from "@/app/_components/container";
import { PostList } from "@/app/_components/post-list";
import { allPosts } from 'contentlayer/generated'

export default function Index() {
  return (
    <main>
      <Container>
        {allPosts.length > 0 && <PostList posts={allPosts} />}
      </Container>
    </main>
  );
}
