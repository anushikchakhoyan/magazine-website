import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import {useTranslation} from "react-i18next";

import Images from "../../components/Fun/Images";
import Title from "../../components/Tilte";
import Videos from "../../components/Fun/Videos";

export default function LabTabs() {
    const {t} = useTranslation();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="py-14 lg:py-3 max-w-layout mx-auto">
            <div className="py-6 flex-col flex-center text-center">
                <Title title={t('menu.fun')} />
                <div className="w-36 h-0.5 bg-red-600"/>
                <p className="pt-3 px-3 whitespace-pre-line">{t('fun.desc')}</p>
            </div>
            <TabContext value={value} className="!px-3">
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label={t('menu.images')} value="1"/>
                    <Tab label={t('menu.videos')} value="2"/>
                </TabList>
                <TabPanel value="1" className="!p-0">
                    <Images/>
                </TabPanel>
                <TabPanel value="2" className="!p-0"><Videos/></TabPanel>
            </TabContext>
        </div>
    );
}