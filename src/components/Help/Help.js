import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Navbar from '../shared/Navbar/Navbar';
import helpData from './HelpData'

const Help = () => {
    return (
        <section className="" style={{ background: "#efefef", height: "100vh", }}>
            <Navbar color='white' />
            <div className="container">
                <div className="row " style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    right: '0',
                    transform: 'translateY(-50%)',
                    margin: "auto 0"
                }} >
                    <h1 className="text-center fw-bold" style={{ color: 'rgb(13, 17, 54)', marginBottom: '25px', fontSize: '21px' }}>F.A.Q</h1>
                    <div className="col-md-8 mx-auto my-auto">
                        <Accordion style={{ border: 'none' }}>
                            {helpData.map(data => (
                                <AccordionItem className="shadow-sm" >
                                    <AccordionItemHeading style={{ fontWeight: 'bold', fontSize: '14px' }}>
                                        <AccordionItemButton style={{ background: 'white', marginBottom: '10px', }}>
                                            {data.heading}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel style={{ background: 'white', marginBottom: '10px', }}>
                                        <p style={{ color: 'rgb(119, 121, 140)' }}>
                                            {data.data}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))}

                        </Accordion>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Help;