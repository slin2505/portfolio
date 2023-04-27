import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Link, Spacer, Text } from "@chakra-ui/layout";
import { FaHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { uidContext } from "../../../utils/uidContext";

const ProjectCard = ({ project }) => {
  const [like, setLike] = useState();
  const [loading, setLoading] = useState(true);
  const { uid } = useContext(uidContext);

  const handleLikeProject = async () => {
    try {
      const ids = {
        userId: uid,
        projectId: project.id,
      };
      await axios.post("/likeDislike", ids);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleLike = async () => {
      try {
        const res = await axios.get(`getLikes/${project.id}`);
        setLike(res.data.likes);
      } catch (err) {
        console.log(err);
      }
    };
    if (loading) {
      handleLike();
      setLoading(false);
    }
  }, [loading, project.id]);
  return (
    <Box
      direction="column"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="lg"
    >
      <Image
        src={project.image}
        alt={project.name + "-image"}
        h={{ sm: "500", md: "200" }}
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Heading fontSize="xl" fontWeight="bold" mr={2}>
            {project.name}
          </Heading>
        </Box>

        <Text mt="4" fontSize="md">
          {project.desc}
        </Text>
        <Flex alignItems="center" mt="4">
          <IconButton
            aria-label="Like"
            icon={<FaHeart />}
            colorScheme="red"
            size="sm"
            mr={2}
            onClick={() => handleLikeProject()}
          />
          <Text fontSize="sm"> {like && like} Likes</Text>
          <Spacer />
          <Link fontSize="sm" color="gray.300" href={project.link} isExternal>
            Go to Project !
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
