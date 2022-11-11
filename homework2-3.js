let role = '';
switch (role) {
    case 'user': 
        console.log('your role: '+ role);
        break;
    case ('admin'):
        console.log('date of birth: ' + role + ' 31.12.1992');
        break;
    case ('manager'):
        console.log('welcome mr: ' + role); 
        break;   
    default:
        console.log('wrong role'); 
        break;
}

