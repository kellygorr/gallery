import * as React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
// import bg from '../../assets/1.jpg'

export const Header: React.FC = () => {
	return (
		<Container>
			{/* <BackgroundImage src={bg} /> */}
			<Logo to="/">
				<HeaderTitle>Photography</HeaderTitle>
			</Logo>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 100px;
	padding-bottom: 10px;
	font-family: 'mohaveregular';
`

const Logo = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	line-height: 1.75em;
`

const HeaderTitle = styled.h1`
	font-size: 2em;
	font-family: 'mohaveregular';
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #bfbfbf;
`

// const BackgroundImage = styled.img`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// `
