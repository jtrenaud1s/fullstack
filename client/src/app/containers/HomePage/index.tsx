import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import BookCard from '../../components/bookCard'
import { Margin } from '../../components/margin'
import Navbar from '../../components/navbar'
import TopSection from '../topsection'

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}

`

export function HomePage() {
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
            <Margin direction="vertical" value="2em" />
            <BookCard />
        </PageContainer>
    )
}