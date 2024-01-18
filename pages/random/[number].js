import React from 'react'
import validateNumber from '../../utils/validateNumber';
import NumberCards from '../../components/NumberCard';

const Page = (props) => {
    return (
        <div>
            <NumberCards number={Number(props.number)} />
        </div>
    )
}

export default Page

export function getServerSideProps(req) {
    try {
        const number = Number(req.query.number);
        if (!validateNumber(number)) {
            throw new Error("Error en el numero")
        }
    } catch (error) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            number: req.query.number
        }
    }
}