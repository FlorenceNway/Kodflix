
import moviecover from './movie_cover.jpg';
import blackmirror from './blackmirror.jpg';
import breakingbad from './breakingbad.jpg';
import deathnote from './deathnote.jpg';
import walkngdead from './walkngdead.jpg';
import wire from './wire.jpg';

export default function getGallery(){
    return [
            {id:'blackmirror', name:'Black Mirror', img:blackmirror, details:'this is detail'},
            {id:'deathnote', name:'Death Note', img :deathnote, details:'this is detail'},
            {id:'walkingdead', name:'Walking Dead', img :walkngdead, details:'this is detail'},
            {id:'wire', name:'Wire', img :wire, details:'this is detail'},
            {id:'breakingbad', name:'Breaking Bad', img :breakingbad, details:'this is detail'},  
            {id:'moviecover', name:'Movie Cover', img :moviecover, details:'this is detail'},    
            {id:'wire2', name:'Wire', img :wire, details:'this is detail'},
            {id:'breakingbad2', name:'Breaking Bad', img :breakingbad, details: 'this is detail'} 
    ]
}