import React, {useState, useEffect} from 'react';
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';
import {ChevronLeft, ChevronRight, Clear, FirstPage, LastPage, Search, ShoppingCart} from '@material-ui/icons/';
import { Modal, makeStyles, Backdrop, Fade, Checkbox, Select, MenuItem  } from "@material-ui/core";
import { FilterOutlined } from "@ant-design/icons"
import {Link} from "react-router-dom";
import {Button} from "antd";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await Axios
                    .get('https://api.punkapi.com/v2/beers');
                setBeerList(data)
                setFilterData(data)
            } catch (err) {
                alert("에러입니다.")
            }}
        fetchData().then(r => null);
    }, []);

    const [filterData, setFilterData] = useState(beerList);
    const [filter, setFilter] = useState(false);

    const [abv, setAbv] = useState('All');
    const handleChange = () => { setFilter(!filter) };
    const columns = [
        { title: "No", field: "id" },
        { title: "BeerName", field: "name",
            render:(row)=>
                <a href={'#'} onClick={() => handleOpen(row)}>
                    {row.name}
                </a> },
        { title : "Alcohol by Volume", field: "abv" } ];

    const [open, setOpen] = useState(false);

    const handleOpen = (row) => {
        setOpen(true);
        console.log(row)
    };

    const handleClose = () => { setOpen(false) };

    useEffect(()=>{
        setFilterData(
            abv === 'All' ? beerList : ( abv === '1to2' ? beerList.filter(data => data.abv >= 1.00 && data.abv <= 1.99)
                                           : ( abv === '2to3' ? beerList.filter(data => data.abv >= 2.00 && data.abv <= 2.99)
                                           : ( abv === '3to4' ? beerList.filter(data => data.abv >= 3.00 && data.abv <= 3.99)
                                           : ( abv === '4to5' ? beerList.filter(data => data.abv >= 4.00 && data.abv <= 4.99)
                                           : ( abv === '5to6' ? beerList.filter(data => data.abv >= 5.00 && data.abv <= 5.99)
                                           : ( abv === '6to7' ? beerList.filter(data => data.abv >= 6.00 && data.abv <= 6.99)
                                           : ( abv === '7to8' ? beerList.filter(data => data.abv >= 7.00 && data.abv <= 7.99)
                                           : ( abv === '8to9' ? beerList.filter(data => data.abv >= 8.00 && data.abv <= 8.99)
                                           : ( abv === '9to10' ? beerList.filter(data => data.abv >= 9.00 && data.abv <= 9.99)
                                           : ( abv === '10to11' ? beerList.filter(data => data.abv >= 10.00 && data.abv <= 10.99)
                                           : ( abv === '11to12' ? beerList.filter(data => data.abv >= 11.00 && data.abv <= 11.99)
                                           : ( abv === '12to13' ? beerList.filter(data => data.abv >= 12.00 && data.abv <= 12.99)
                                           : ( abv === '13to14' ? beerList.filter(data => data.abv >= 13.00 && data.abv <= 13.99)
                                           : ( abv === '14to15' ? beerList.filter(data => data.abv >= 14.00 && data.abv <= 14.99)
                                           : ( abv === '15more' ? beerList.filter(data => data.abv >= 15.00)
                                           :  <>No records to display</> ))))))))))))))))
    },[abv])

    const alertMyRow = (row) => (
               alert(`name: ${row.name},
               tagline: ${row.tagline},
               firstBrewed: ${row.first_brewed},
               description: ${row.description},
               imageUrl: ${row.image_url},
               abv: ${row.abv},
               ibu: ${row.ibu},
               target_fg: ${row.target_fg},
               target_og: ${row.target_og},
               ebc: ${row.ebc},
               srm: ${row.srm},
               ph: ${row.ph},
               attenuation_level: ${row.attenuation_level},
               volume-value: ${row.volume.value},
               volume-unit: ${row.volume.unit},
               boil_volume-value: ${row.boil_volume.value},
               boil_volume-unit: ${row.boil_volume.unit},
               method-mash_temp-temp-value: ${row.method.mash_temp[0].temp.value},
               method-mash_temp-temp-unit: ${row.method.mash_temp[0].temp.unit},
               method-mash_temp-duration: ${row.method.mash_temp[0].duration},
               method-fermentation-temp-value: ${row.method.fermentation.temp.value},
               method-fermentation-temp-unit: ${row.method.fermentation.temp.unit},
               method-twist: ${row.method.twist},
               ingredients-malt-name: ${row.ingredients.malt[0].name},
               ingredients-malt-amount-value: ${row.ingredients.malt[0].amount.value},
               ingredients-malt-amount-value: ${row.ingredients.malt[0].amount.unit},
               ingredients-malt-name: ${row.ingredients.malt[1].name},
               ingredients-malt-amount-value: ${row.ingredients.malt[1].amount.value},
               ingredients-malt-amount-value: ${row.ingredients.malt[1].amount.unit},
               ingredients-malt-name: ${row.ingredients.malt[2].name},
               ingredients-malt-amount-value: ${row.ingredients.malt[2].amount.value},
               ingredients-malt-amount-value: ${row.ingredients.malt[2].amount.unit},
               ingredients-hops1-name: ${row.ingredients.hops[0].name},
               ingredients-hops1-amount-value: ${row.ingredients.hops[0].amount.value},
               ingredients-hops1-amount-value: ${row.ingredients.hops[0].amount.unit},
               ingredients-hops1-add: ${row.ingredients.hops[0].add},
               ingredients-hops1-attribute: ${row.ingredients.hops[0].attribute},
               ingredients-hops2-name: ${row.ingredients.hops[1].name},
               ingredients-hops2-amount-value: ${row.ingredients.hops[1].amount.value},
               ingredients-hops2-amount-value: ${row.ingredients.hops[1].amount.unit},
               ingredients-hops2-add: ${row.ingredients.hops[1].add},
               ingredients-hops2-attribute: ${row.ingredients.hops[1].attribute},
               ingredients-hops3-name: ${row.ingredients.hops[2].name},
               ingredients-hops3-amount-value: ${row.ingredients.hops[2].amount.value},
               ingredients-hops3-amount-value: ${row.ingredients.hops[2].amount.unit},
               ingredients-hops3-add: ${row.ingredients.hops[2].add},
               ingredients-hops3-attribute: ${row.ingredients.hops[2].attribute},
               ingredients-hops4-name: ${row.ingredients.hops[3].name},
               ingredients-hops4-amount-value: ${row.ingredients.hops[3].amount.value},
               ingredients-hops4-amount-value: ${row.ingredients.hops[3].amount.unit},
               ingredients-hops4-add: ${row.ingredients.hops[3].add},
               ingredients-hops4-attribute: ${row.ingredients.hops[3].attribute},
               ingredients-hops5-name: ${row.ingredients.hops[4].name},
               ingredients-hops5-amount-value: ${row.ingredients.hops[4].amount.value},
               ingredients-hops5-amount-value: ${row.ingredients.hops[4].amount.unit},
               ingredients-hops5-add: ${row.ingredients.hops[4].add},
               ingredients-hops5-attribute: ${row.ingredients.hops[4].attribute},
               ingredients-yeast: ${row.ingredients.yeast},
               food_pairing: ${row.food_pairing},
               brewers_tips: ${row.brewers_tips},
               contributed_by: ${row.contributed_by}`)
    );

    return (
        <>
            <div><br/>
                &nbsp;&nbsp;
                <Button>
                    <Link to='/Home'>
                        홈으로
                    </Link>
                </Button>
            </div><br/>
            <div>
                <MaterialTable
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
                          onClick: (evt, row) => console.log(row)
                        }]}
                />
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropProps={{ timeout: 500 }} >

                    \
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h2>Animated React Modal</h2>
                            <p>

                            </p>
                        </div>
                    </Fade>
                </Modal>
            </div>
        </>
    )
};

export default BeerList;