import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmBookmarkServiceMd = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {}
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1609_537"
                style={{
                    width: 900,
                    backgroundColor: 'rgba(248,246,246,1)',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    itemSpacing: 15,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 20,
                    paddingBottom: 20,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    borderColor: 'rgba(207,206,206,1)',
                    borderBottomWidth: 1,
                    borderStyle: 'solid',
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_1609_538"
                    style={{
                        height: 25,
                        width: 25,
                        borderRadius: 100,
                        backgroundColor: 'rgba(255,255,255,1)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        itemSpacing: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 0,
                        marginRight: 7.5,
                    }}
                >
                    <div
                        id="t18_1609_539"
                        style={{
                            height: 23,
                            width: 13,
                            backgroundImage:
                                'url(https://s3-alpha-sig.figma.com/img/a232/f265/6d4dfabc3f42d2da2720746b18259512?Expires=1689552000&Signature=TSxONEadHbaLcLRUUlH50sbFuHqT6kPgr1eEWERDGFg0Nfn60zkDin4hLsJLosGqG4gRieoGhkqeRv0oZk27HSt07z8mYCssV~y-ygjUzbVU-73bCBzrPkofEaeUv6WSnXM9OlwivL8~kqRRKnbHTANPz24jrx1eLxEO8QZPDnVn9HcKFL0Rt40RIolfx8nUe1jUQQF34~5G6eb7rQoULG6EHPO2pwBmMs8XNQ3bWu3Rypg91fPeuS2I7DuLoUiAwT0U6ddbT3jbesCLg0enOjCwmJyu~dnImpc02qHdrzd8ZhLOiRQdVytlYPsKHRLwQeJiEBEsgMmdzn7Afbv~IA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            display: 'flex',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    ></div>
                </div>

                <div
                    id="t18_1609_540"
                    style={{
                        width: 730,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        itemSpacing: 10,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 7.5,
                        marginRight: 7.5,
                    }}
                >
                    <div
                        id="t18_1609_541"
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 10,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1609_542"
                            style={{
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: 'rgba(207,206,206,1)',
                                borderStyle: 'solid',
                                marginLeft: 0,
                                marginRight: 5,
                            }}
                        >
                            <div
                                id="t18_1609_543"
                                style={{
                                    height: 47,
                                    width: 47,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                <div
                                    id="t18_1609_544"
                                    style={{
                                        height: 47,
                                        width: 47,
                                        backgroundImage:
                                            'url(https://s3-alpha-sig.figma.com/img/5725/79dc/b59d12e00ba1c1c8dd73b794b72e0926?Expires=1689552000&Signature=buzwC5P3lMf-51fIToY30xT4I3E2t31eLchrIWXLpb0Zi9s3g77NyS5sbqRgeTVPdSn0m7Zgp8IHAADaVBMSLyLTCaOaR-VBZfpDinj4ZS96lXglDj-il3OsMAxSZWm7xchS2~twfH~GYX48AMouWz~B2tirZ4gyhys5CwmiusZ2t~IiSuPwmXDD1OsGmr~uucWn~lt5NnwI~CNpt-xhRkMBBL9dk1y3fbkGHl17GOYCOvKzjCsuBHes~62JrxpYJY3WGfrLxdiDKOANj1mscK6IVlf8tjJj2A04WBcP9kd67xJhv-N23aoGqkdPK5OzncvpDex4rzDwlhcZNuuGxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        display: 'flex',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                ></div>
                            </div>

                            <div
                                id="t18_1609_545"
                                style={{
                                    width: 86,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_1609_546"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Rentals & Properties
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_1609_547"
                            style={{
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: 'rgba(207,206,206,1)',
                                borderStyle: 'solid',
                                marginLeft: 5,
                                marginRight: 5,
                            }}
                        >
                            <div
                                id="t18_1609_548"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                <div
                                    id="t18_1609_549"
                                    style={{
                                        height: 47,
                                        width: 47,
                                        backgroundImage:
                                            'url(https://s3-alpha-sig.figma.com/img/5b89/34fe/29a8ca3d55a44c1f96ba54dd3becae27?Expires=1689552000&Signature=OpdVHJuaf0ymlQgqKoqNCvdq-~AkLcKH1yDvK5KGtVpxOWiqwKIwGSpp7XswHq4CNHvi02PB-nlxn5PcRvFgLIJyqMt~VLSjPcd1hEwjuGJqqVeDNsomRNZ8mg-KzxP~XjDLM5rsQQfiaMQNdztcFRDhdHCXO3WU9WN1YH9~A3Swv2bvHpBUoAW0e-3L5yZrYcphhaY68jaGOzrzQ6xP86NPrX8Xrt6F2BXvTTJJaxJyavWE5G5dzIXFFchwtvqTYE3PqIoFnmzFpnnQWWCdSdeVcYG1s9nAtz3vEO3WWO6mrhfwvDRLLAI1pgEzlu0NOSPmcUdmGqFmBw1-1nOIOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        display: 'flex',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                ></div>
                            </div>

                            <div
                                id="t18_1609_550"
                                style={{
                                    width: 62,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_1609_551"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Ride sharing
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_1609_552"
                            style={{
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                boxShadow:
                                    '0px 4px 10px rgba(0,0,0,0.11999999731779099)',
                                borderWidth: 1,
                                borderColor: 'rgba(186,15,23,1)',
                                borderStyle: 'solid',
                                marginLeft: 5,
                                marginRight: 5,
                            }}
                        >
                            <div
                                id="t18_1609_553"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                <div
                                    id="t18_1609_554"
                                    style={{
                                        height: 47,
                                        width: 47,
                                        backgroundImage:
                                            'url(https://s3-alpha-sig.figma.com/img/3910/1a3d/6634de85acb59f0dd056db4eab56c22b?Expires=1689552000&Signature=o1j0CRfCZotQaCEqtWvPsEk~EGB1ds9UFJQGb4UnAyaUJMBuYpXCBJ~RZ4e31tHGXlMOTIdmQWHHRlu68lEO7JMYvJY6UzBu0aM2d7Tth7Kg7rrwtxeyoSZIzrjW0miOE6s7xzBmdCTli4mF2CfmiyuxReeDg2zjSS6N951XlLHZQh3uCAa8lSCG4kLbjgj~wJIICT7YUB5Eoy7zJJ~jof2Zed2iMhB-iFK~LnKVo9LA2wVBghqsXzjBjZK-9K5CvHvN7e-Mxa0tZ3VUgkKx81eMrOSJlLsQEgyhnvRt9rGsWkUTaXoQQEhqZ~xRXrj6gZIHNFWoibN8IqIVInpdIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        display: 'flex',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                ></div>
                            </div>

                            <div
                                id="t18_1609_555"
                                style={{
                                    width: 104,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_1609_556"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Travel suggestions
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_1609_557"
                            style={{
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: 'rgba(207,206,206,1)',
                                borderStyle: 'solid',
                                marginLeft: 5,
                                marginRight: 5,
                            }}
                        >
                            <div
                                id="t18_1609_558"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                <div
                                    id="t18_1609_559"
                                    style={{
                                        height: 47,
                                        width: 47,
                                        backgroundImage:
                                            'url(https://s3-alpha-sig.figma.com/img/2c55/caa6/2d6b91fb568796c8cd00406aa243a42a?Expires=1689552000&Signature=jsTM3sHEBATZs1fvBqwS5NJFRUKAU~CY8yB9B1o1W8He9HPoBLGK7lfr9wUjcUe3UnNdBaedQ-owxndFcusGLCgpHoUbNLomQDS7-1EIk~h60L~UHmSUQXSoRFsMVkx1ovjTp~81kCQQ7R-58GHOGbeOOQ0-62mr3I5urhOxuW7MY2Ukl44e3uR7OsmT3976IwV4re3EyxUZQ57vM7W0u-VY5-NefCwY4GTmmP31Pq2SfUKy4IQmPnhvr3xWJKKvWBaIGe11y2Wa3IsFs9odHfFb5IKJOq6lCBvgo4tTyZFf9u4zhaGSgmiBIC2jnO2DKv7UIWH0XDM5xXye-qqpOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        display: 'flex',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                ></div>
                            </div>

                            <div
                                id="t18_1609_560"
                                style={{
                                    width: 104,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_1609_561"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Movie suggestions
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_1609_567"
                            style={{
                                borderRadius: 7,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: 'rgba(207,206,206,1)',
                                borderStyle: 'solid',
                                marginLeft: 5,
                                marginRight: 5,
                            }}
                        >
                            <div
                                id="t18_1609_568"
                                style={{
                                    height: 47,
                                    width: 47,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                <div
                                    id="t18_1609_569"
                                    style={{
                                        height: 47,
                                        width: 47,
                                        backgroundImage:
                                            'url(https://s3-alpha-sig.figma.com/img/b671/d457/c3bb9e20b32c9aecc9b485aa648ffccc?Expires=1689552000&Signature=NaPmr5HKC2gH2dDm3HGnpsPW74ZqqCDwUOGTFegdC2ll0GFkzrYM0JTcxxUdQMsMN1YY9zmaBMGq20Wiv0944ktXgABKhDPMEkP1FSAAP7IdKUqw2RoiJNiI3K8wWS5pApYvMmEgA3y~ze8hvUX2P6r1egC-nlrU5fySHXCQPh~mvwQuwKJZls-UdDojwlhclr88sUSfILs2HHU0E9PgIWPESJwTPREF3hWFbWXBq1148uBWOp2ENVNDvjgRYbxqhbMlEpHL-yU5W6uInEoigKeFgwO9HP6ax~Twap5c0KlPqy2UQZKWWCtxW2EihHYvFAO2TWL-PEM5aeSg0qFFsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        display: 'flex',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                ></div>
                            </div>

                            <div
                                id="t18_1609_570"
                                style={{
                                    height: 40,
                                    width: 99,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_1609_571"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Visa & Immigration
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_1609_572"
                            style={{
                                borderRadius: 7,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: 'rgba(207,206,206,1)',
                                borderStyle: 'solid',
                                marginLeft: 5,
                                marginRight: 0,
                            }}
                        >
                            <div
                                id="t18_1609_573"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                <div
                                    id="t18_1609_574"
                                    style={{
                                        height: 47,
                                        width: 47,
                                        backgroundImage:
                                            'url(https://s3-alpha-sig.figma.com/img/23a8/040f/6e5ad0e5fad794d7fd62bb2aed19a8ef?Expires=1689552000&Signature=TDLlNK2ZjW7uPuds2C1LZiLBNL7yMIYpu5oXluuPl0woAYkOX9il7awgTh8gBvPjP1UapseV1SuGPChBTKlTiILI2AVsGrF~a3kU2w--Be-HGs7yobLctQFH9euR0PW-TrtkpWIRoT7EcMGGBZqJ0Tzjl3c0Fqto1Xhu~0SI~rXQVnmDb2xVlcbKtFTM4mLY2xpvM6oegQlBIIyl~xPhdS61q2NtRj4qfayg-nEXVCJ03IJW7NP6O~2TzZHaaM2-9QzrYLD7CygVfofyWOD0XMYBIso1zs-Hiwp3zAWDN3iktov0m3kfEbHuw~0EzrZrBpxsPQhaHgAtxTZCg3JEhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        display: 'flex',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                ></div>
                            </div>

                            <div
                                id="t18_1609_575"
                                style={{
                                    width: 92,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_1609_576"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Travel companion
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_1609_582"
                    style={{
                        height: 25,
                        width: 25,
                        borderRadius: 100,
                        backgroundColor: 'rgba(255,255,255,1)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        itemSpacing: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 7.5,
                        marginRight: 0,
                    }}
                >
                    <div
                        id="t18_1609_583"
                        style={{
                            height: 22.75,
                            width: 13,
                            backgroundImage:
                                'url(https://s3-alpha-sig.figma.com/img/541d/91e6/721516ef581510c75f166d7f1f788948?Expires=1689552000&Signature=eErxuARpQL6gnveMMCd3gYuUaq2eQjTZgHJCcNc9ie6bvvb4GuWrR5XywFNGD0qGwnmWzo7FBVGZnrbvKWwFI5D7SqnwXGooNctaqT3UfnhWf4lHiPGPbOR6j9~CZfHNWxNaUI9y6U7cKZNsNnghMoQ09ZuMv2Afm1ACcwMbJM~6L8naezXlB9jEwiGdPV5Msvk63vKY1nRpLjun~eQC~qxG4NT1UzXewyOZbLHHHL9bKgQ9Q~peqmEvPpsSVZLQgEymoRhxANXy9xe8hyZEwJxGpju-5gRHAj1CZFn9gS1qwF26GosnwpCDvQu3S9i-7wWz7cDlU~kAkFznMjc5Gw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            display: 'flex',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
})
export default MmBookmarkServiceMd
