import { name, version } from '../package.json'

import node from './configs/node'
import react from './configs/react'

export default {
	meta: {
		name,
		version,
	},
	configs: {
		node,
		react,
	},
}
