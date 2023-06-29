import Link from "next/link";
import styles from "components/LanguageSwitch.module.scss";

export const LanguageSwitch = () => {
  return (
    <Link className={styles.a} href="/en">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        fill="#292b2f"
      >
        <path d="M180.2 500C81 500 0 419 0 319.8c0-9.6 8-17.5 17.4-17.5s17.5 8 17.5 17.5c0 68.8 47.9 126.5 112.3 141.6L141 451a17.5 17.5 0 1 1 30-18l24.5 40.8c3.2 5.4 3.2 12.1.2 17.5-3.3 5.3-9 8.8-15.4 8.8zM482.6 197.7c-9.6 0-17.5-8-17.5-17.5 0-68.8-47.9-126.5-112.3-141.6L359 49a17.5 17.5 0 1 1-30 18l-24.5-40.8c-3.2-5.4-3.2-12.1-.2-17.5 3.3-5.3 9-8.8 15.4-8.8C419 0 500 81 500 180.2c0 9.6-8 17.5-17.4 17.5zM105.3 153.3a2.4 2.4 0 0 0-3.7-1.7c-8 5.3-13 12.1-13 19.5 0 2.2 0 7.2 7.9 7 3.1-.2 6.5-1.2 10-2.7 1-.5 1.5-1.6 1.3-2.6-1-6.1-1.8-12.7-2.5-19.5zM135.3 140.7l-6.5.8c-1.2.2-2 1.3-2 2.5l.5 8.2c.2 2.2 3 3 4.3 1.2 2.2-2.8 4.2-6 6-9.2 1-1.7-.4-3.7-2.3-3.5z" />
        <path d="M249 178.3v-91c1-47-22.2-70.3-70.4-70.3h-91c-47 0-70.3 23.3-70.3 70.3v91.3c0 48 23.3 71.2 70.3 70h91.3c48 1.2 71.2-22 70-70.3zm-101.8 29.5c-.9.1-1.7-.2-2.3-1l-9.4-13c-1-1.5-.2-3.6 1.6-3.8 23.8-3.5 38.5-13.2 38.5-29.3 0-7.2-3.5-13.7-11-18a2.4 2.4 0 0 0-3.3.9 166.6 166.6 0 0 1-28 36.3c-6 5.3-24.3 17-42.8 17.4-15.4 0-24.8-9.6-24.8-24.4 0-21.3 15.1-38.2 36.6-47.6.8-.4 1.4-1.3 1.4-2.3l-.3-21.2c0-1.4-1-2.4-2.4-2.4-8.8.3-18.1.6-24 .6h-.4c-1.3 0-2.3-1-2.4-2.3l-.9-17.3c0-1.4 1-2.6 2.5-2.6h25.7c1.3 0 2.3-1 2.3-2.3.3-5 .4-10.4.6-15.4 0-1.3 1.2-2.3 2.6-2.2l19.7 1.5c1.3 0 2.3 1.2 2.2 2.5l-.7 12.4c-.1 1.4 1 2.7 2.5 2.6 15.4-1 31.1-2.7 47.3-5.8 1.4-.3 2.7.7 2.9 2.1l1.6 18c0 1.3-.8 2.5-2 2.7a518.2 518.2 0 0 1-51.6 4.6c-1.2 0-2.2 1-2.3 2.3l-.2 14.6c0 1.4 1.3 2.5 2.7 2.3 3.8-.5 10-1.1 16-1 1 0 2-.7 2.3-1.7l.3-1.1c.3-1.2 1.5-2 2.8-1.8l18.3 3.2c1.4.3 2.2 1.7 1.8 3-.3 1.3.3 2.5 1.5 3 16.2 6 28.5 18.6 28.5 39 0 24.9-13.6 42-53.4 47.5zM364.4 246.5a118.2 118.2 0 1 0 0 236.4 118.2 118.2 0 0 0 0-236.4zM428 427.7h-22c-1.4 0-2.8-1-3.2-2.3l-9.8-28.7a3.5 3.5 0 0 0-3.2-2.3h-51c-1.6 0-2.9.9-3.4 2.3l-10 28.7a3.5 3.5 0 0 1-3.3 2.3h-21.2c-2.4 0-4-2.4-3.2-4.7l50.5-133a3.5 3.5 0 0 1 3.2-2.3h26.8c1.4 0 2.7.9 3.2 2.2L431.2 423c.8 2.3-.8 4.7-3.2 4.7z" />
        <path d="M364.7 321h-.4l-17.2 48.7c-.8 2.3.8 4.7 3.2 4.7h28c2.3 0 4-2.4 3.2-4.6L364.7 321z" />
      </svg>
    </Link>
  );
};
