import React, { useState, useEffect, forwardRef } from 'react';
import {Link} from "react-router-dom";
import Axios from 'axios';
import Table from 'material-table';
import { Button } from "antd";
import { FilterOutlined } from "@ant-design/icons"
import { Modal, makeStyles, Checkbox, Select, MenuItem  } from "@material-ui/core";
import { ChevronLeft, ChevronRight, Clear, FirstPage, LastPage, Search, ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        overflow:'scroll',
        margin:'auto',
        width: '80%',
        height: '80%',
        right: '80%',
        bottom: '80%',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    ShoppingCart: forwardRef((props, ref) => <ShoppingCart {...props} ref={ref} />),
    Button: forwardRef((props, ref) => <Button {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterOutlined {...props} ref={ref} />)
};


const BeerList = () => {

    const classes = useStyles();
    const [beerList, setBeerList] = useState();
    const [row, setRow] = useState([]);
    const [filterData, setFilterData] = useState(beerList);
    const [filter, setFilter] = useState(false);
    const [abv, setAbv] = useState('All');
    const [open, setOpen] = useState(false);
    const columns = [
        { title: "No", field: "id" },
        { title: "BeerName", field: "name",
            render:(row)=>
                <a href={'#'} onClick={() => {handleOpen(row)}}>
                    {row.name}
                </a> },
        { title : "Alcohol by Volume", field: "abv" } ];

    const handleChange = () => { setFilter(!filter) };
    const handleOpen = (datarow) => {
        setOpen(true)
        setRow(datarow)};
    const handleClose = () => { setOpen(false) };

    useEffect(() => {
        const fetchData = async() => {
            Axios.get('https://api.punkapi.com/v2/beers').then(({data}) =>{
                setBeerList(data)
                setFilterData(data)
            })
                .catch (err => alert("에러입니다."))}
        fetchData().then(r => null);
    }, []);

    useEffect(() => {
        setFilterData(
            abv === 'All' ? beerList : ( abv === '1to2'   ? beerList.filter(data => data.abv >= 1.00  && data.abv <= 1.99)
                                           : ( abv === '2to3'   ? beerList.filter(data => data.abv >= 2.00  && data.abv <= 2.99)
                                           : ( abv === '3to4'   ? beerList.filter(data => data.abv >= 3.00  && data.abv <= 3.99)
                                           : ( abv === '4to5'   ? beerList.filter(data => data.abv >= 4.00  && data.abv <= 4.99)
                                           : ( abv === '5to6'   ? beerList.filter(data => data.abv >= 5.00  && data.abv <= 5.99)
                                           : ( abv === '6to7'   ? beerList.filter(data => data.abv >= 6.00  && data.abv <= 6.99)
                                           : ( abv === '7to8'   ? beerList.filter(data => data.abv >= 7.00  && data.abv <= 7.99)
                                           : ( abv === '8to9'   ? beerList.filter(data => data.abv >= 8.00  && data.abv <= 8.99)
                                           : ( abv === '9to10'  ? beerList.filter(data => data.abv >= 9.00  && data.abv <= 9.99)
                                           : ( abv === '10to11' ? beerList.filter(data => data.abv >= 10.00 && data.abv <= 10.99)
                                           : ( abv === '11to12' ? beerList.filter(data => data.abv >= 11.00 && data.abv <= 11.99)
                                           : ( abv === '12to13' ? beerList.filter(data => data.abv >= 12.00 && data.abv <= 12.99)
                                           : ( abv === '13to14' ? beerList.filter(data => data.abv >= 13.00 && data.abv <= 13.99)
                                           : ( abv === '14to15' ? beerList.filter(data => data.abv >= 14.00 && data.abv <= 14.99)
                                           : ( abv === '15more' ? beerList.filter(data => data.abv >= 15.00)
                                           :  <>No records to display</>                                         ))))))))))))))))
    },[abv])

    return (
        <>
            <div><br/>
                &nbsp;&nbsp;
                <Button>
                    <Link to='/home'>
                        홈으로
                    </Link>
                </Button>
            </div><br/>
            <div>
                <Table
                    icons={tableIcons}
                    columns={columns}
                    data={filterData}
                    title="맥주 리스트"
                    options={{
                        pageSize: 25,
                        pageSizeOptions: '',
                        selection: true,
                        filtering: filter
                    }}
                    actions={[
                        { icon: () => <Checkbox
                                checked={filter}
                                onChange={handleChange}
                                inputProps={{'aria-label': 'primary checkbox'}}/>,
                            tooltip: "Hide/Show Filter Option",
                            isFreeAction: true },
                        { icon: () => <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={abv}
                                onChange={(e) => {
                                    setAbv(e.target.value)
                                }}
                                style={{width: 150}}
                            >
                                <MenuItem value={"All"}>Alcohol Range</MenuItem>
                                <MenuItem value={'1to2'}>1~2</MenuItem>
                                <MenuItem value={'2to3'}>2~3</MenuItem>
                                <MenuItem value={'3to4'}>3~4</MenuItem>
                                <MenuItem value={'4to5'}>4~5</MenuItem>
                                <MenuItem value={'5to6'}>5~6</MenuItem>
                                <MenuItem value={'6to7'}>6~7</MenuItem>
                                <MenuItem value={'7to8'}>7~8</MenuItem>
                                <MenuItem value={'8to9'}>8~9</MenuItem>
                                <MenuItem value={'9to10'}>9~10</MenuItem>
                                <MenuItem value={'10to11'}>10~11</MenuItem>
                                <MenuItem value={'11to12'}>11~12</MenuItem>
                                <MenuItem value={'12to13'}>12~13</MenuItem>
                                <MenuItem value={'13to14'}>13~14</MenuItem>
                                <MenuItem value={'14to15'}>14~15</MenuItem>
                                <MenuItem value={'15more'}>15more</MenuItem>
                            </Select>,
                            isFreeAction: true },
                        { tooltip: 'select items',
                            icon: () => <ShoppingCart/>,
                            onClick: (evt, row) =>alert(row.length+'개가 담겼습니다.')
                        }]}
                />

                { row != 0 ?
                    <>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropProps={{ timeout: 500 }} >
                            <div className={classes.paper}>
                                <h2>{row.name}</h2>
                                <li>tagline: {row.tagline}</li>
                                <li>firstBrewed: {row.first_brewed}</li>
                                <li>description: {row.description}</li>
                                <li>image: <img style={{width:'60px', height:'200px'}} src={row.image_url}/></li>
                                <li>abv: {row.abv}</li>
                                <li>ibu: {row.ibu}</li>
                                <li>target_fg: {row.target_fg}</li>
                                <li>target_og: {row.target_og}</li>
                                <li>ebc: {row.ebc}</li>
                                <li>srm: {row.srm}</li>
                                <li>ph: {row.ph}</li>
                                <li>attenuation_level: {row.attenuation_level}</li>
                                <li>volume-value:{row.volume.value}</li>
                                <li>volume-unit: {row.volume.unit}</li>
                                <li>boil_volume-value: {row.boil_volume.value}</li>
                                <li>boil_volume-unit: {row.boil_volume.unit}</li>
                                <li>method-mash_temp-temp-value: {row.method.mash_temp[0]? row.method.mash_temp[0].temp.value: <></>}</li>
                                <li>method-mash_temp-temp-unit: { row.method.mash_temp[0] ? row.method.mash_temp[0].temp.unit: <></>}</li>
                                <li>method-mash_temp-duration: {row.method.mash_temp[0]  ? row.method.mash_temp[0].duration: <></>}</li>
                                <li>method-fermentation-temp-value: {row.method.fermentation.temp.value}</li>
                                <li>method-fermentation-temp-unit: {row.method.fermentation.temp.unit}</li>
                                <li>method-twist: {row.method.twist}</li>
                                <li>ingredients-malt1-name: {row.ingredients.malt[0] ? row.ingredients.malt[0].name: <></>}</li>
                                <li>ingredients-malt1-amount-value: {row.ingredients.malt[0] ? row.ingredients.malt[0].amount.value: <></>}</li>
                                <li>ingredients-malt1-amount-value: {row.ingredients.malt[0] ? row.ingredients.malt[0].amount.unit: <></>}</li>
                                <li>ingredients-malt2-name: {row.ingredients.malt[1] ? row.ingredients.malt[1].name: <></>}</li>
                                <li>ingredients-malt2-amount-value: {row.ingredients.malt[1] ? row.ingredients.malt[1].amount.value: <></>}</li>
                                <li>ingredients-malt2-amount-value: {row.ingredients.malt[1] ? row.ingredients.malt[1].amount.unit: <></>}</li>
                                <li>ingredients-malt3-name: {row.ingredients.malt[2] ? row.ingredients.malt[2].name: <></>}</li>
                                <li>ingredients-malt3-amount-value: {row.ingredients.malt[2] ? row.ingredients.malt[2].amount.value: <></>}</li>
                                <li>ingredients-malt3-amount-value: {row.ingredients.malt[2] ? row.ingredients.malt[2].amount.unit: <></>}</li>
                                <li>ingredients-hops1-name: {row.ingredients.hops[0] ? row.ingredients.hops[0].name: <></>}</li>
                                <li>ingredients-hops1-amount-value: {row.ingredients.hops[0] ? row.ingredients.hops[0].amount.value:<></>}</li>
                                <li>ingredients-hops1-amount-value: {row.ingredients.hops[0]  ? row.ingredients.hops[0].amount.unit: <></>}</li>
                                <li>ingredients-hops1-add: {row.ingredients.hops[0]  ? row.ingredients.hops[0].add:<></>}</li>
                                <li>ingredients-hops1-attribute: {row.ingredients.hops[0]  ? row.ingredients.hops[0].attribute: <></>}</li>
                                <li>ingredients-hops2-name: {row.ingredients.hops[1] ? row.ingredients.hops[1].name: <></>}</li>
                                <li>ingredients-hops2-amount-value: {row.ingredients.hops[1] ? row.ingredients.hops[1].amount.value:<></>}</li>
                                <li>ingredients-hops2-amount-value: {row.ingredients.hops[1]  ? row.ingredients.hops[1].amount.unit: <></>}</li>
                                <li>ingredients-hops2-add: {row.ingredients.hops[1] ? row.ingredients.hops[1].add:<></>}</li>
                                <li>ingredients-hops2-attribute: {row.ingredients.hops[1] ? row.ingredients.hops[1].attribute: <></>}</li>
                                <li>ingredients-hops3-name: {row.ingredients.hops[2]  ? row.ingredients.hops[2].name: <></>}</li>
                                <li>ingredients-hops3-amount-value: {row.ingredients.hops[2]  ? row.ingredients.hops[2].amount.value:<></>}</li>
                                <li>ingredients-hops3-amount-value: {row.ingredients.hops[2] ? row.ingredients.hops[2].amount.unit: <></>}</li>
                                <li>ingredients-hops3-add: {row.ingredients.hops[2]  ? row.ingredients.hops[2].add:<></>}</li>
                                <li>ingredients-hops3-attribute: {row.ingredients.hops[2]  ? row.ingredients.hops[2].attribute: <></>}</li>
                                <li>ingredients-hops4-name: {row.ingredients.hops[3] ? row.ingredients.hops[3].name: <></>}</li>
                                <li>ingredients-hops4-amount-value: {row.ingredients.hops[3] ? row.ingredients.hops[3].amount.value:<></>}</li>
                                <li>ingredients-hops4-amount-value: {row.ingredients.hops[3] ? row.ingredients.hops[3].amount.unit: <></>}</li>
                                <li>ingredients-hops4-add: {row.ingredients.hops[3] ? row.ingredients.hops[3].add:<></>}</li>
                                <li>ingredients-hops4-attribute: {row.ingredients.hops[3] ? row.ingredients.hops[3].attribute: <></>}</li>
                                <li>ingredients-hops5-name: {row.ingredients.hops[4]  ? <>{row.ingredients.hops[4].name}</>: <></>}</li>
                                <li>ingredients-hops5-amount-value: {row.ingredients.hops[4]? row.ingredients.hops[4].amount.value:<></>}</li>
                                <li>ingredients-hops5-amount-value: {row.ingredients.hops[4]  ? row.ingredients.hops[4].amount.unit: <></>}</li>
                                <li>ingredients-hops5-add: {row.ingredients.hops[4] ? row.ingredients.hops[4].add:<></>}</li>
                                <li>ingredients-hops5-attribute: {row.ingredients.hops[4] ? row.ingredients.hops[4].attribute: <></>}</li>
                                <li>ingredients-yeast: {row.ingredients.yeast}</li>
                                <li>food_pairing: {row.food_pairing}</li>
                                <li>brewers_tips: {row.brewers_tips}</li>
                                <li>contributed_by: {row.contributed_by}</li>
                            </div>
                        </Modal></>
                    : <></> }
            </div>
        </>
    )};

export default BeerList;