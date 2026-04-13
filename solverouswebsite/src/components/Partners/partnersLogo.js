import HomebakerLogo from '../../assets/homebaker.webp';
import MatekkLogo from '../../assets/MATEKK(2).png';

function Partners() {
    return (
        <div className='flex flex-row space-x-4'>
            <a href='https://www.facebook.com/homebakerqualitygoods' target='_blank' rel='noreferrer' className="flex flex-row gap-4 partners_logo p-2 cursor-pointer">
                <img src={HomebakerLogo} alt="Homebaker" className='object-contain'/>
            </a>
            <a href='https://www.matekkcybercore.com/' target='_blank' rel='noreferrer' className="flex flex-row gap-4 partners_logo p-4">
                <img src={MatekkLogo} alt="MATEKK Cybercore Techonologies cursor-pointer" className='object-contain'/>
            </a>
        </div>
    );
}

export default Partners;