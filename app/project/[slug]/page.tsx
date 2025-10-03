import { ProjectData } from "@/data/data";
import { notFound } from "next/navigation";
import { Preloader } from "@/components/Preloader";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Header, Paragraph } from "@/components/ui/typography";
import Image from "next/image";

interface PageProps {
  params: { slug: string };
}
async function getProjectBySlug(slug: string) {
  return ProjectData.find((item) => item.slug === slug);
}
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Preloader />
      <Section>
        <Container>
          <Header>{project.title}</Header>
          <Paragraph>{project.description}</Paragraph>
          <Button
            as="link"
            href={project.link}
            type="button"
            variant="green"
            size="md"
          >
            View Project
          </Button>
          {project.images &&
            project.images.length > 0 &&
            project.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${project.title} image ${index + 1}`}
                width={1000}
                height={400}
                quality={80}
                placeholder="blur"
              />
            ))}
        </Container>
      </Section>
    </>
  );
}
