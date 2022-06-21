import React from 'react';
import Routes from '../routes/index';
import 'antd/dist/antd.css';
import Header from '../components/Header';

export default () => (
	<>
		<Header />
		{Routes}
	</>
);
