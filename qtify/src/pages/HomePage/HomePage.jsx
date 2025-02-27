import React from "react";
import styles from "./HomePage.module.css";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import {fetchFilters} from "../../api/api";
import { useOutletContext } from "react-router-dom";

export default function HomePage(){
    const {data} = useOutletContext();
    const {newAlbums, topAlbums,songs,genres}= data;

    if (!data) {
        return <div>Loading...</div>; // or any loading indicator
    }

    return (
        <>
            <Hero />
            <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album" />
            <Section title="New Albums" data={newAlbums} type="album" />
            <Section
            title="Songs"
            data={songs}
            filterSource={fetchFilters}
            type="song"
            />
        </div>
        </>
    );
}
