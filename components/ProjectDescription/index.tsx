import { Container } from './styles';


export function ProjectDescription() {
  return (
    <Container>
        <div className='content'>
          <a className='description'>Essa é uma API REST criada com Nextjs & Styled Components, clonando <a className='project-link' href='https://xd.adobe.com/view/a17e69b2-e470-4733-88cc-cebef85675c4-f42d/' target={'blank'}> Este Projeto Adobe XD (clique aqui para abrir).</a></a>
            <div className='img-guts'><img className='img-guts' src='/guts192.png'></img></div>
          <a className='description1'>API criada por Felipe Lissa - <a className='project-link' href='https://portfolio-felipelissa.vercel.app/' target={'blank'} >Portfólio</a> </a>
        </div>
    </Container>
  );
}
