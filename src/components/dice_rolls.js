import React, {Component} from 'react';


class DiceRoll extends Component {
	
	render() {
		return (
			<div className="Dice">
			<label for="">
			How Many Die?
				<select name="Multiply" id="diceNum" value="0">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
			</label>
			<label for="">
			Value?
				<select name="Multiply" id="diceSize">
					<option value="4">d4</option>
					<option value="6">d6</option>
					<option value="8">d8</option>
					<option value="10">d10</option>
					<option value="12">d12</option>
					<option value="20">d20</option>
					<option value="100">d100</option>
				</select>
			</label>
			<button onclick="rollDice(); return false;">Roll Dice</button>
			</div>
		);
	}
}

export default DiceRoll;