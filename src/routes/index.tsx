import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';
import activities from '../components/activities/activities.json';
import { IconsImageFrame } from '~/components/activities/icons-image-frame';
import { Animation } from '~/components/animation';

export default component$(() => {
    useStylesScoped$(styles)

    return (
        <>
            <hr />

            <div class='main-container'>
                <div class='background-image'>
                    <div class='some-words-about-me'>
                        <Animation type='fadeRight'>
                            <h4>Няколко думи за мен ...</h4>
                            <h6>Университет по архитектура, строителство и геодезия, випуск 2022</h6>
                            <h6>Катедра: Градоустройство</h6>

                            <div class='see-more-container'>
                                <p>Виж повече</p>
                                <svg width="15px" height="15px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" />
                                </svg>
                            </div>
                        </Animation>

                        <Animation>
                            <img src='/images/profile.jpg' alt='profile' class='profile-pic' />
                        </Animation>
                    </div>

                    <div class='activities-container'>
                        <Animation type='fadeLeft'>
                            <h4 class='activities-title'>Дейности</h4>
                        </Animation>

                        <div class='icons-main-box'>
                            {
                                Object.values(activities).map((activity) =>
                                    <Animation key={activity.title} type='fadeLeft' delay={500} >
                                        <div class='icons-container'>
                                            <IconsImageFrame activity={activity} />
                                            <p class=''>{activity.title}</p>
                                        </div>
                                    </Animation>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
};
