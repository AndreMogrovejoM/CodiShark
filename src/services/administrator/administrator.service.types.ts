// Administrator service interfaces and types

export interface Administrator {}

export interface FirstPanelAdministrator {
  status: number;
  connections: number;
  payments: number;
  calls: number;
  monthIni: string;
  monthEnd: string;
}

export interface SecondPanelAdministrator extends FirstPanelAdministrator {
  charges: number;
}

export interface SecondPanelPayload {
  dateIni: string;
  dateEnd: string;
}
