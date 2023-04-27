import { Box, Container, SimpleGrid, Text } from "@chakra-ui/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { MotionBox } from "../Motion";
import HeroHeader from "../HeroHeader";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState();
  const getProject = async () => {
    const res = await axios.get("project");
    setProjects(res.data);
    setLoading(false);
    console.log(res);
  };
  useEffect(() => {
    if (loading === true) {
      getProject();
    }
  }, [loading]);

  return (
    <Container color="white" maxW="5xl" p={{ base: 5, md: 12 }}>
      <Box as="header" position="relative">
        <MotionBox whileHover={{ translateY: -5 }} width="max-content">
          <HeroHeader
            underlineColor="tertiary"
            mt={0}
            cursor="pointer"
            width="max-content"
          >
            <Text as="h3">Projects</Text>
          </HeroHeader>
        </MotionBox>
      </Box>

      <Box as="article" mb={5}>
        <Text>Here some of the open-source/personal projects i realised :</Text>
      </Box>
      {loading === false && (
        <SimpleGrid as="article" columns={{ sm: 1, md: 3 }} spacing="4">
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default Projects;
