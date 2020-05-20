import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Group from '@vkontakte/vkui/dist/components/Group/Group';

const osName = platform();

const { Friend, Photo, Voice,Music, Parks, Restaurants, Bars, Cafes, Cinemas } = false;
const All =true;
const FilterPage = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			FilterPage
		</PanelHeader>
		<table align="left" width="100%">
		<caption>Сортировка по записям</caption>
		<tr>
			<td><FormControlLabel control={<Checkbox checked={Friend} name="Friend" />} label="С записями друзей" /></td>
			<td><FormControlLabel control={<Checkbox checked={Voice} name="Voice" />} label="С голосовыми записями" /></td>
		</tr>
		<tr>
			<td><FormControlLabel control={<Checkbox checked={Photo} name="Photo" />} label="С фотографиями" /></td>
			<td><FormControlLabel control={<Checkbox checked={Music} name="Music" />} label="С музыкой" /></td>
		</tr>
		</table>
		<table align="left" width="100%">
		<caption>Сортировка по местам</caption>
		<tr>
			<td><FormControlLabel control={<Checkbox checked={All} name="All" />} label="Всё" /></td>
			<td><FormControlLabel control={<Checkbox checked={Parks} name="Parks" />} label="Парки" /></td>
			<td><FormControlLabel control={<Checkbox checked={Restaurants} name="Restaurants" />} label="Рестораны" /></td>
		</tr>
		<tr>
			<td><FormControlLabel control={<Checkbox checked={Bars} name="Bars" />} label="Бары" /></td>
			<td><FormControlLabel control={<Checkbox checked={Cafes} name="Cafes" />} label="Кофейни" /></td>
			<td><FormControlLabel control={<Checkbox checked={Cinemas} name="Cinemas" />} label="Кинотеатры" /></td>
		</tr>
		</table>
	</Panel>
);

FilterPage.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default FilterPage;
