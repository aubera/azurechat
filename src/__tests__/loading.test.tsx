import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Loading from "@/app/loading";

describe('Loading', () => {
    it('renders a heading', () => {
        render(<Loading />)

        expect(screen.getByTestId("loading")).toBeInTheDocument();
    })
})