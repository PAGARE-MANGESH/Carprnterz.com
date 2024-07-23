import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import '../../MultipleLang/i18n.js'

function MyComponent() {

    const { t } = useTranslation();

    return <h1 className='mt-20 text-center'>{t('greeting')}</h1>
}

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function LanguageSelector() {
    return (
        <Suspense fallback="loading...">
            <MyComponent />
        </Suspense>
    );
}