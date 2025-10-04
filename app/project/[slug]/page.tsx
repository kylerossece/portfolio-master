import { ProjectData } from "@/data/data";
import { notFound } from "next/navigation";
import { Preloader } from "@/components/Preloader";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Header, Paragraph } from "@/components/ui/typography";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import styles from "@/assets/css/sections/project.module.scss";

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
      <Section className={styles.project}>
        <Container>
          <Link href="/" className={styles.homeLink}>
            <Icons.ArrowLeft />
            Back to Home
          </Link>
          <Header>{project.title}</Header>
          <Paragraph>{project.description}</Paragraph>
          <div className={styles.projectButton}>
            <Button
              as="link"
              href={project.link}
              type="button"
              variant="green"
              size="md"
            >
              <span className={styles.projectLink}>
                <Icons.RedEye />
                View Project
              </span>
            </Button>
          </div>
          {project.images &&
            project.images.length > 0 &&
            project.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${project.title}`}
                width={1200}
                height={600}
                quality={80}
                placeholder="blur"
                layout="responsive"
              />
            ))}
        </Container>
      </Section>
    </>
  );
}
