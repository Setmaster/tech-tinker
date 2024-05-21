'use client';

import { Container, Title, Accordion } from '@mantine/core';
import classes from './page.module.css';

const answers ={
    'what-is-contraption': 'A contraption is a device or gadget that is complex or ingenious. It is often used to describe a machine or device that is strange, complicated, or eccentric. Contraptions can be made for a variety of purposes, including entertainment, education, or practical use.',
    'open-source': 'Yes, this website is open source. You can find the source code on GitHub at this',
    'share-contraption': 'To share your contraption on this site, simply visit the Share page and follow the instructions to upload your contraption.',
    'safety-guidelines': 'Safety is our top priority when it comes to contraptions. We ensure that all contraptions shared on this site meet strict safety guidelines to protect users from harm. If you have any concerns about the safety of a contraption, please contact us immediately.',
    'community-guidelines': 'We have a set of community guidelines that all users must follow when using this site. These guidelines are designed to ensure that all users can enjoy a safe and welcoming environment. If you have any questions about our community guidelines, please contact us.'
}
export default function FaqPage() {
    return (
        <Container size="sm" className={classes.wrapper}>
            <Title ta="center" className={classes.title}>
                Frequently Asked Questions
            </Title>

            <Accordion variant="separated">
                <Accordion.Item className={classes.item} value="what-is-contraption">
                    <Accordion.Control>What is a contraption?</Accordion.Control>
                    <Accordion.Panel>{answers["what-is-contraption"]}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="open-source">
                    <Accordion.Control>Is this website open source?</Accordion.Control>
                    <Accordion.Panel>{`${answers["open-source"]} `} <a href={"https://github.com/Setmaster/tech-tinker"} >link</a>.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="share-contraption">
                    <Accordion.Control>How can I share my contraption on this site?</Accordion.Control>
                    <Accordion.Panel>{answers["share-contraption"]}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="safety-guidelines">
                    <Accordion.Control>What are the safety guidelines for contraptions?</Accordion.Control>
                    <Accordion.Panel>{answers["safety-guidelines"]}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="community-guidelines">
                    <Accordion.Control>What are the community guidelines?</Accordion.Control>
                    <Accordion.Panel>{answers["community-guidelines"]}</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}