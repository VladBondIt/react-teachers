import React, { useEffect, useState } from 'react'

function CardsItem({ firstName, patrName, photoPathSquare, photoPath, photoPathLarge,
    minPricePerHour, teachingSubjects, hasLargePhoto, hasPhoto, hasSquarePhoto }) {

    const [imgLink, setImgLink] = useState('')


    const handlerImg = () => {

        switch (true) {
            case hasSquarePhoto:
                setImgLink(photoPathSquare)
                break;
            case hasPhoto:
                setImgLink(photoPath)
                break;
            case hasLargePhoto:
                setImgLink(photoPathLarge)
                break;

            default:
                setImgLink(photoPathSquare)
                break;
        }
    }

    useEffect(() => {
        handlerImg()
    }, [])


    return (
        <div className="cards__item card">
            <div className="card__column">
                <div
                    style={{ backgroundImage: `url(https://${imgLink})` }}
                    className="card__img-box">
                </div>
            </div>
            <div className="card__column">
                <div className="card__name">{firstName} {patrName}</div>
                <div className="card__subject">{teachingSubjects.map((value) => value.subject.name).join(', ')}</div>
                <div className="card__cost">от {minPricePerHour}</div>
            </div>
        </div>
    )
}

export default CardsItem
