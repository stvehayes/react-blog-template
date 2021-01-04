import React from 'react';
import Posts from "../../posts/Posts";
import Article from '../Article/Article';
import { BodyContainer, Container } from "../StyledComponents/StyledComponents";

const HomeProjects = () => {
    return(
        <BodyContainer>
            <Container top={6}>
                <Container leftAlign bottom={4}>
                    <h2>Featured Articles</h2>
                </Container>
                {Posts.map((project) => {
                    return (
                        <Article
                            route={project.route}
                            thumbnail={project.image}
                            title={project.title}
                            date={project.date}
                            description={project.description}
                        />
                    )})
                }
            </Container>
        </BodyContainer>
    )
}

export default HomeProjects;
