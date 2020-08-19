import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Victor Nogueira</h1>
        <h2>@vmnogg</h2>

        <p>React JS Front-end Developer</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 30 de março de 1999
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>1230 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
