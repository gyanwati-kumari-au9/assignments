import { Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Profile from '../container/profile';
import Videos from '../container/videos';

const Routes = () => {
    return (
        <Switch>
            <Layout>
                <Route path="/" exact component={Videos} />
                <Route path="/profile" exact component={Profile} />
            </Layout>
        </Switch>
    );
};

export default Routes;