import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './image-frame.css?inline';

interface ComponentProps {
    activity: {
        image: string;
    };
}

export const IconsImageFrame = component$((props: ComponentProps) => {
    useStylesScoped$(styles);
    const { activity } = props;

    return (
        <div class='icons-box'>
            <img src={activity.image} alt="frame" class='image' width='50' height='50' />
        </div>
    )
});
