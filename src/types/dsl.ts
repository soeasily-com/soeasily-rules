export interface Rule {
  name: string;
  expr?: string;
  when?: string;
  then?: {
    type: string;
    params?: Record<string, any>;
  };
  event?: {
    type: string;
    params?: Record<string, any>;
  };
  tags?: string[];
  description?: string;
  extends?: string[];
  test_cases?: Array<{ input: any; expect: any }>;
  settings?: {
    execution?: 'first_match' | 'all_match';
    fail_fast?: boolean;
    log_level?: string;
  };
  response_template?: any;
}
