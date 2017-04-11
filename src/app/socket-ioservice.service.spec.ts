import { TestBed, inject } from '@angular/core/testing';

import { SocketIOServiceService } from './socket-ioservice.service';

describe('SocketIOServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketIOServiceService]
    });
  });

  it('should ...', inject([SocketIOServiceService], (service: SocketIOServiceService) => {
    expect(service).toBeTruthy();
  }));
});
