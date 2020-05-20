import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Icon24Notification from '@vkontakte/icons/dist/24/notification';
import Icon24Sort from '@vkontakte/icons/dist/24/sort';
import Icon24Place from '@vkontakte/icons/dist/24/place';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Vmeste</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
		 <Group title="bottomInterface">
                <FixedLayout vertical="bottom">
                <Separator wide />
			    <Div style={{display: 'flex'}}>
				<Button size="l" stretched style={{ marginRight: 8 }} mode="tertiary" before={<Icon24Sort/>} onClick={go} data-to="filterPage">
				</Button>
                     <Button size="l" stretched style={{ marginRight: 8 }} mode="tertiary" before={<Icon24Place/>}>  
				</Button>
				<Button size="l" stretched style={{ marginRight: 8 }} mode="tertiary" before={<Icon24Notification/>} onClick={go} data-to="news">
				</Button>
			    </Div>
               </FixedLayout> 
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;

