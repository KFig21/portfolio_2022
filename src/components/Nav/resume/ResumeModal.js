import React, { useEffect, useState } from 'react'
import ResumeSC from './ResumeSC'
import NavSC from '../NavSC'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ResumeDB from '../../../assets/resumes/ResumeDB.pdf'
import ResumeDG from '../../../assets/resumes/ResumeDG.pdf'
import ResumeDR from '../../../assets/resumes/ResumeDR.pdf'
import ResumeDY from '../../../assets/resumes/ResumeDY.pdf'
import ResumeLB from '../../../assets/resumes/ResumeLB.pdf'
import ResumeLG from '../../../assets/resumes/ResumeLG.pdf'
import ResumeLR from '../../../assets/resumes/ResumeLR.pdf'
import ResumeLY from '../../../assets/resumes/ResumeLY.pdf'

export default function ResumeModal({ theme }) {
    const [showResumeModal, setShowResumeModal] = useState(false)
    const [resume, setResume] = useState(ResumeDY)
    useEffect(() => {
        switch (theme.name) {
            case 'darkBlueTheme':
                setResume(ResumeDB);
                break;
            case 'darkGreenTheme':
                setResume(ResumeDG);
                break;
            case 'darkRedTheme':
                setResume(ResumeDR);
                break;
            case 'darkYellowTheme':
                setResume(ResumeDY);
                break;
            case 'lightBlueTheme':
                setResume(ResumeLB);
                break;
            case 'lightGreenTheme':
                setResume(ResumeLG);
                break;
            case 'lightRedTheme':
                setResume(ResumeLR);
                break;
            case 'lightYellowTheme':
                setResume(ResumeLY);
                break;
            default:
              setResume(ResumeDY);
          }
    }, [theme])
    

    return (
        <>
            {/* MODAL */}
            {showResumeModal &&         
            <ResumeSC.ModalPage
            className={`modal-page ${showResumeModal ? "open" : "close"}`}
            >
                <ResumeSC.ModalContainer
                    className={`modal-container ${showResumeModal ? "open" : "close"}`}
                >
                    <iframe
                        title='iframe'
                        src={resume}
                        style={{ width: '100%', height: '96vh', border: 'none' }}
                    ></iframe>
                </ResumeSC.ModalContainer>
                <ResumeSC.ModalBackground
                    className={`modal-background ${showResumeModal ? "open" : "close"}`}
                    onClick={() => setShowResumeModal(false)}
                >
                <ResumeSC.CloseButton onClick={() => setShowResumeModal(false)}>Close</ResumeSC.CloseButton></ResumeSC.ModalBackground>
            </ResumeSC.ModalPage>}
            {/* ICON BUTTON */}
            <NavSC.NavIcon className={theme.type} onClick={() => setShowResumeModal(true)}>
                <ContactPageIcon className="nav-icon" />
            </NavSC.NavIcon>
        </>
    )
}
