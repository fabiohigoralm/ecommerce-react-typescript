import React from 'react';
import { BannerMain } from "../../components/banner";
import Header from "../../components/header"
import Menu from "../../components/menu";
import { ShelfProducts } from "../../components/shelf/product";
import { ShelfBrands } from "../../components/shelf/brands";
import { ShelfDepartament } from "../../components/shelf/departament";
import { Page, ContainerPage } from './styles';
import { Collection } from "../../components/collection";
import { NewsLetter } from "../../components/newsletter";
import Footer from "../../components/footer";
import {Popup} from "../../components/popup";

const Home = () => {
    return (
        <><Page>
            <ContainerPage>
                <Popup onClick={()=>void{}}/>
                <Header />
                <Menu />
                <BannerMain />
                <ShelfDepartament />
                <ShelfBrands />
                <ShelfProducts />
                <Collection/>
                <NewsLetter/>
                <Footer/>
            </ContainerPage>
        </Page>
        </>
    )
}

export default Home