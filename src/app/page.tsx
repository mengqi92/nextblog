import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { allPosts } from 'contentlayer/generated'

export default function Index() {
  return (
    <main>
      <Container>
        <Intro />
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </main>
  );
}
