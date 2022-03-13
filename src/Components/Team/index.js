import axios from 'axios';
import { Component } from 'react';
import {TeamSection, Container, TeamTitle, TeamContent, TeamBx, ImgBx, Image, Text, Name, Job} from './style.js';
class Team extends Component {
    state = {
        team :[]
    }

    componentDidMount() {
        axios.get('js/data.json').then(res => {this.setState({team: res.data.team})});
    }

    render() {
        const {team} = this.state;
        const teamList = team.map(member => {
            return(
                <TeamBx key={member.id}>
                    <ImgBx>
                        <Image src={member.image}/>
                    </ImgBx>
                    <Text>
                        <Name>{member.name}</Name>
                        <Job>{member.job}</Job>
                    </Text>
                </TeamBx>
            )
        })
        return(
            <TeamSection>
                <Container>
                    <TeamTitle>Our Team</TeamTitle>
                    <TeamContent>
                        {teamList}
                    </TeamContent>
                </Container>
            </TeamSection>
        )
    }

}

export default Team;