import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { allPosts } from 'contentlayer/generated'

export default function Index() {
  return (
    <main>
      <Container>
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </main>
  );
}
