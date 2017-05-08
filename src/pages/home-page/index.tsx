import './styles.css'
import * as React from 'react'

import Container from '../../components/container'
import Text from '../../components/text'

import { ListItem } from '../../structures/list'

export default class HomePage extends React.Component<any, any> {
	constructor() {
		super()
	}
	render() {
		return (
			<Container vertical pad-l>
				<Container justify-center pad-l-top >
					<Container wrap margin-l-bottom margin-l-top>
						<Text medium xl >Movies</Text>
					</Container>
				</Container>
				<Container align-center vertical>
					<Container wrap vertical>
						<ListItem item={{
							image: 'http://zplusapp.com/static/img/interstellar-256.png',
							title: 'Interstellar (2009)',
							description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
						}} />
						<ListItem item={{
							image: 'http://zplusapp.com/static/img/interstellar-256.png',
							title: 'The Prestige (2006)',
							description: 'Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate stage illusion.',
						}} />
					</Container>
				</Container>
			</Container>
		)
	}
}
