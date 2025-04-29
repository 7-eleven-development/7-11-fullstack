import { receiveGasValue, getGasValue } from '../../controllers/middleware/gasSensorController.js';
import * as gasSensorModel from '../../models/gasSensorModel.js';

describe('Gas Sensor Controller', () => 
{
    let req, res;

    beforeEach(() =>
    {
        req = { body: {} };
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
    });


    describe('receiveGasValue', () => 
    {
        it('should store gas value and return 200 if value is provided', () => 
        {
            req.body.gasValue = 42;
            const setSpy = jest.spyOn(gasSensorModel, 'setGasValue').mockImplementation(() => {});

            receiveGasValue(req, res);

            expect(setSpy).toHaveBeenCalledWith(42);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.send).toHaveBeenCalledWith({ message: 'Gas data received'});
        });

        it('should return 400 if gas value is not provided', () => 
        {
            receiveGasValue(req, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({ message: 'No gas data received'});
        });
    });

    describe('getGasValue', () => {
        it('should return gas value if available', () => 
        {
            jest.spyOn(gasSensorModel, 'getGasValue').mockReturnValue(55);
            getGasValue(req, res);
            expect(res.send).toHaveBeenCalledWith({ gasValue: 55});
        });

        it('should return 404 if no gas value available', () => {
            const req = {}; 
            const res = {
              status: jest.fn().mockReturnThis(),
              send: jest.fn()
            };
        
            jest.spyOn(gasSensorModel, 'getGasValue').mockReturnValue(null); 
        
            // Call the controller function
            getGasValue(req, res);
        
            // Assert that status was called with 404
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.send).toHaveBeenCalledWith({ message: 'No gas data available' });
          });
    });

});