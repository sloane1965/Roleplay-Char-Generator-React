import React, {Component} from 'react';

class DiceResult extends Component {
	constructor() {
		super()
		this.state = {
			multiplier: 1,
			result: 0,
			dice: [4,6,8,10,12,20]
		};
	}
}