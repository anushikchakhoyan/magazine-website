import {useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {
    Button,
    Dialog,
    TextField,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText
} from "@mui/material";

const Newsletter = () => {
    const {t} = useTranslation();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <section className="pb-12 pt-20 mx-auto px-4 md:px-0 my-10 bg-red-500">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4 text-center">
                        <h1 className="text-3xl text-white font-semibold">
                            {t('newsletter.title')}
                        </h1>
                        <p className="text-white text-base leading-relaxed">
                            {t('newsletter.free')}
                        </p>
                        <Button
                            className="py-2.5 !px-8 text-black !bg-white rounded-md outline-none shadow-md focus:shadow-none sm:px-5"
                            onClick={handleClickOpen}
                        >
                            {t('newsletter.title_2')}
                        </Button>
                    </div>
                    <div className="mt-5 text-center">
                        <p className="mt-3 mx-auto text-center max-w-lg text-sm text-white">
                            {t('newsletter.desc')}
                            <Link to="/privacy" className="underline">
                                {t('menu.terms')}
                            </Link>
                        </p>
                        <p className="mt-3 mx-auto text-center max-w-lg text-sm text-black/75">
                            {t('newsletter.notSpam')}
                            <Link to="/privacy" className="underline">
                                {t('menu.privacy')}
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className="text-center !text-3xl">
                    {t('newsletter.title_2')}
                </DialogTitle>
                <DialogContent className="!px-20">
                    <DialogContentText className="text-center">
                        {t('newsletter.sendUpdate')}
                    </DialogContentText>
                    <div  className="!py-10">
                        <TextField
                            autoFocus
                            fullWidth
                            id="name"
                            type="email"
                            margin="dense"
                            variant="standard"
                            label={t('newsletter.placeholder')}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="secondary" onClick={handleClose}>{t('newsletter.close')}</Button>
                    <Button onClick={handleClose} autoFocus>{t('newsletter.send')}</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Newsletter;
