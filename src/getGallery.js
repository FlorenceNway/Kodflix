
import moviecover from './movie_cover.jpg';
import blackmirror from './blackmirror.jpg';
import breakingbad from './breakingbad.jpg';
import deathnote from './deathnote.jpg';
import walkngdead from './walkngdead.jpg';
import wire from './wire.jpg';

export default function getGallery(){
    return [
            {id:'blackmirror', name:'Black Mirror', img:blackmirror},
            {id:'deathnote', name:'Death Note', img :deathnote},
            {id:'walkingdead', name:'Walking Dead', img :walkngdead},
            {id:'wire', name:'Wire', img :wire},
            {id:'breakingbad', name:'Breaking Bad', img :breakingbad},  
            {id:'moviecover', name:'Movie Cover', img :moviecover},    
            {id:'wire', name:'Wire', img :wire},
            {id:'breakingbad', name:'Breaking Bad', img :breakingbad} 
    ]
}