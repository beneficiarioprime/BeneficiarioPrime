import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import style from '../../styles/BlogSlug.module.css'

const dataPost = {
    title: "Ipsum ad elit aliqua qui ullamco laborum aliquip aliquip et voluptate culpa reprehenderit enim",
    content: "Lorem proident Lorem tempor culpa fugiat velit. Amet reprehenderit ea ut laborum irure ad nostrud qui culpa. Et nulla nisi ut sunt anim reprehenderit. Enim aliqua do officia consequat aliquip aute reprehenderit sit aute laborum cupidatat tempor est. Aute proident id exercitation dolore commodo excepteur aliquip.Ut non in deserunt irure velit irure laborum labore officia excepteur consectetur irure veniam culpa.Ea id officia eu sint irure ipsum anim in anim reprehenderit duis nisi ad. ",
    content2: "Exercitation anim aute elit pariatur pariatur qui elit sit laboris fugiat in in dolor reprehenderit."
}

const BlogSlug = () => {
    return (
        <>
            <Head>
                <title>{dataPost.title} - Beneficiário Prime</title>
            </Head>
            <Navbar />

            <div className={`container mt-5 mb-5 ${style.container}`}>
                <div className={`row`}>
                    <div className={`col-md-9 col-12`}>
                        <h3 className="mb-5">{dataPost.title}</h3>
                        <Image src="/img/blog/img-blog.jpg" width={1024} height={576} />
                        <p className="mt-5">{dataPost.content}</p>
                        <p>{dataPost.content2}</p>
                    </div>
                    <div className={`col-md-2`}>
                        <Image src="/img/banner-blog.png" width={220} height={600} />
                </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BlogSlug
