import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import {IconButton} from '@material-ui/core';
import SubjectIcon from '@material-ui/icons/Subject';
import logo from '../images/logo.jpg';
import PhoneIcon from '@material-ui/icons/Phone';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) =>({
    outerWrapper:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
    },
    navigation : {
        margin:'0 5px',
        width:'calc(100% - 10px)',
        height: '40px',
        display:'flex',
        justifyContent:'space-evenly',
        backgroundColor:'#5DADE2',
        alignItems: 'center'
    },
    search : {
        width:'270px',
        margin:'5px',
        border: '1px solid #EAEDED',
        borderRadius:'10px',
        padding:'5px',
        transition : 'all .3s ease',
        '&:hover' : {
            backgroundColor:'#EAEDED'
        }
    },
    home : {
        display:'flex',
        padding:'5px',
        alignItems: 'center',
        height:'100%',
        cursor:'pointer',
        '&:hover' : {
            backgroundColor:'#3498DB'
        }
    },
    buttonWrapper : {
        [theme.breakpoints.up(450)] : {
            display:'none'
        }
    },
    logo : {
        marginTop:'5px',
        width:'270px',
        margin:'0 5px',
        height:'50px',
        backgroundPosition:'center',
        backgroundSize:'cover',
    },
    phone : {
        display:'flex',
        verticalAlign:'middle'
    },
    categories : {
        '&:hover' : {
            backgroundColor:'#3498DB'
        }
    }
}));



const Navbar = () => {
    const classes=useStyles()
    const [search,setSearch] = useState('')
    const handleSearch = (e) => {
    setSearch(e.target.value)
    }
    const [isOpen,setIsOpen] = useState(false)
    const handleMenu = () => {
        setIsOpen(!isOpen)
    }
    const [categories,setCategories] = useState(false)
    const handleCategories = () => {
        setCategories(!categories)
    }
    
    return (
        <div className={classes.outerWrapper}>
            <div className={classes.logo} style={{backgroundImage:`url(${logo})`}}></div>
            <InputBase
            value={search}
            onChange={handleSearch} 
            placeholder="Search..."
            className={classes.search}/>
                {isOpen && 
                    <Drawer anchor={'top'} open={isOpen} onClose={handleMenu}>
                        <List style={{backgroundColor:'#EAEDED'}}>
                            {
                            [
                                {text:'Home',icon:<HomeIcon/>,link:'/clothes'},
                                {text:'Log in',icon:<LockOpenIcon/>,link:'/clothes/auth'},
                                {text:'Categories',icon:<ArrowDropDownIcon/>}
                            ].map((item,index) => (
                                item.text === 'Categories' ? 
                                <div key={index} >
                                    <ListItem className={classes.categories} button onClick={handleCategories}>
                                        <ListItemText>{item.text}</ListItemText>
                                        {categories ? <ExpandLess/> : <ExpandMore/>}
                                    </ListItem>
                                    <Collapse in={categories} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {
                                            [
                                                {text:'Man',link:'/clothes/man'},
                                                {text:'Woman',link:'/clothes/man'},
                                                {text:'Hats',link:'/clothes/man'},
                                                {text:'Jackets',link:'/clothes/man'},
                                                {text:'Sneakers',link:'/clothes/man'},
                                            ].map((item,index) => (
                                                <ListItem key={index} className={classes.categories} button style={{paddingLeft:'5px'}}>
                                                    <Link to={`${item.link}`} style={{textDecoration:'none',color:'inherit',width:'100%'}}>
                                                        <ListItemText primary={`${item.text}`}/>
                                                    </Link>
                                                </ListItem>
                                            ))
                                            }
                                        </List>
                                    </Collapse>
                                </div> :
                                <div key={index} className={classes.home}>
                                    <Link to={`${item.link}`} style={{textDecoration:'none',color:'inherit',width:'100%'}}>
                                        <ListItem button key={index}>
                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                            <ListItemText>{item.text}</ListItemText>
                                        </ListItem>
                                    </Link>
                                </div>
                            ))
                            }
                        </List>
                    </Drawer> 
                }
                <div className={classes.navigation}>
                    <div className={classes.phone}>
                        <PhoneIcon style={{margin:'0 5px'}}/>
                        <h6>Hotline : (+100) 123 456 7890</h6>
                    </div>
                    <div className={classes.buttonWrapper}>
                        <IconButton onClick={handleMenu}>
                            <SubjectIcon/>
                        </IconButton>
                    </div>
                </div>
        </div>
    )
}
  
export default Navbar;