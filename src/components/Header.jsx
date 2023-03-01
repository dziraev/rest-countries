import styled from 'styled-components'
import { useState, useEffect } from "react";
import { IoMoon, IoMoonOutline } from 'react-icons/io5'

import { Container } from './Container'


const HeaderEl = styled.div`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.a.attrs({
	href: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;

`;

export const Header = () => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title>
						Where is the world?
					</Title>
					<ThemeSwitcher onClick={toggleTheme}>
						{theme === 'light' ? <IoMoonOutline size='14px' /> : <IoMoon size='14px'/>}
						<span>{theme} Theme</span>
					</ThemeSwitcher>
				</Wrapper>
			</Container>
		</HeaderEl>
	);
};
