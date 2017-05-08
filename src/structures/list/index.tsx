import './styles.css'
import * as React from 'react'

import Container from '../../components/container'
import Text from '../../components/text'
import Image from '../../components/image'
import Tag from '../../components/tag'

const SAMPLE = {
	image: 'http://i2.kym-cdn.com/photos/images/original/000/964/872/5b5.jpg',
	title: 'Interstellar (2009)',
	description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
	created: 'added by Dax',
}

export class ListItem extends React.Component<any, any> {
	constructor() {
		super()
	}
	render() {
		const { item } = this.props
		return (
			<Container >
				<Container vertical>
					<a href={item.link}>
						<Text medium s>{item.title}</Text>
						<Text xs >{item.description}</Text>
						<Text xxs margin-s-bottom >added by Dax</Text>
						<Container align-center>
							<Container >
								<Tag>cerebral</Tag>
							</Container>
							<Container margin-s-left >
							</Container>
						</Container>
						<Container pad />
					</a>
				</Container>
			</Container>
		)
	}

}
